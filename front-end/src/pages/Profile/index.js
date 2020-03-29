import React,{ useEffect,useState } from 'react';
import { Link,useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


import logoImg from '../../assets/logo.png';

export default function Profile(){

	const histoy = useHistory();

	const [ incidentes ,  setIncidente ] =useState([]);

	const ongName = localStorage.getItem('ongName');
	const ongId = localStorage.getItem('ongId');

	useEffect(()=>{

		if(ongId==null){
			
			histoy.push('/');

		}else{
			api.get('profile', {
				headers: {
					authorization: ongId,
				}
			}).then(response=>{

				setIncidente(response.data);
			})
		}
	},[ongId]);

	async function handleDeleteIncidente(id){

		try{
			await api.delete("incidents/"+id, {	
				headers: {
					authorization: ongId,
				}
			});
			
			setIncidente(incidentes.filter(incident => incident.id !== id));
			
		}catch(err){
			alert('Erro ao deletar caso, tente novamente.');
		}
	}

	function handleLogout(){
		localStorage.clear();
		histoy.push('/');
	}

	return (
		<div className="profile-container">

			<header>
				<img src={ logoImg } alt ="Be The Hero" />

				<span>Bem vinda, { ongName } </span>

				<Link className="button" to="/incidente/new">Cadatrar novo caso</Link>

				<button onClick={handleLogout} type="button">
					<FiPower size = { 18 } color="#E02041" />
				</button>
			</header>
			<h1>Casos cadastrados</h1>

			<ul>
				{ incidentes.map( inc=> (
					<li key={inc.id}>
						<strong>CASO:</strong>
						<p>{ inc.title }</p>

						<strong>DESCRIÇÂO:</strong>
						<p> { inc.description }</p>

						<strong>VALOR:</strong>
						<p>{ inc.value }</p>

						<button onClick = {() => handleDeleteIncidente(inc.id)} type="button">
							<FiTrash2 size = {20} color ="#a8a8b3" />
						</button>
					</li> 
				))}
				
			</ul>
		</div>
	);
}
