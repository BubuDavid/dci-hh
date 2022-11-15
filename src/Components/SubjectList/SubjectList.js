import React from 'react'
import { useState } from 'react'
import SearchButton from './SearchButton/SearchButton'
import SubjectItem from './SubjectItem/SubjectItem'
import './SubjectList.css'

function SubjectList() {
	let subjectNames = ["ACABADO DEL CUERO","ADMINISTRACION Y MANEJO DE PERSONAL","ALGEBRA LINEAL","ALGEBRA LINEAL AVANZADA","ANALISIS DE CIRCUITOS","ANALISIS DE LA CULTURA MEXICANA","ANALISIS VECTORIAL","ANATOMIA Y FISIOLOGIA I","ANATOMIA Y FISIOLOGIA II","ARQUITECTURA DE MICROCONTROLADORES","ARQUITECTURA DE MICROCONTROLADORESin","BALANCE DE MATERIA Y ENERGIA","BIOESTADISTICA","BIOFISICA MEDICA","BIOLOGIA CELULAR","BIOLOGIA CONTEMPORANEA","BIOLOGIA MOLECULAR","BIOMATERIALES","BIOMECANICA","BIOMECANICA AVANZADA","BIOQUIMICA","BIOSEGURIDAD","CALCULO DE VARIAS VARIABLES","CALCULO DIFERENCIAL","CALCULO INTEGRAL","CIENCIA DE MATERIALES","CINETICA QUIMICA Y CATALISIS","COMUNICACION ORAL Y ESCRITA","DESARROLLO HISTORICO DE LA FISICA MODERNA","DISENO DE PROCESOS","ECUACIONES DIFERENCIALES ORDINARIAS","ECUACIONES DIFERENCIALES PARCIALES","ELECTRICIDAD Y MAGNETISMO","ELECTROMAGNETISMO","ESTADISTICA AVANZADA","ESTRUCTURA DE LA MATERIA","FENOMENOLOGIA DE LAS PARTICULAS ELEMENTALES","FENOMENOS DE TRANSPORTE","FISICA CUANTICA","FISICA GENERAL","FISICA RELATIVISTA","FISICOQUIMICA DE POLIMEROS","FLUIDOS, ONDAS Y TEMPERATURA","FUNCIONES ESPECIALES","FUNDAMENTOS FILOSOFICO EPISTEMOLOGICOS","FUNDAMIENTOS DE PROCESAMIENTO DIGITAL DE IMAGENES","FUNDAMIENTOS DE PROCESAMIENTO DIGITAL DE SENALES","HERRAMIENTAS INFORMATICAS Y GESTION DE LA INFORMACION","INGENIERIA AMBIENTAL DE AGUA Y SUELOS","INGENIERIA AMBIENTAL DE NORMAS, GESTION Y AUDITORIAS","INGENIERIA DE CALOR","INGENIERIA DE CONTROL","INGENIERIA DE CONTROL DE PROCESOS","INGENIERIA DE FLUIDOS","INGENIERIA DE PROYECTOS","INGENIERIA DE REACTORES HETEROGENEOS","INGENIERIA DE REACTORES HOMOGENEOS","INGENIERIA ECONOMICA","INGLES I","INGLES II","INGLES III","INSTRUMENTACION MEDICA","INTRODUCCION A LA METODOLOGIA DE LA INVESTIGACION","INTRODUCCION A LA TEORIA DE CUERDAS","INVESTIGACION DE OPERACIONES","LABORATORIO DE ASTRONOMIA","LABORATORIO DE FENOMENOS DE TRANSPORTE","LABORATORIO DE PROCESOS DE SEPARACION","LABORATORIO DE REACTORES","LABORATORIO DE SIMULACION DE PROCESOS","MATEMATICAS SUPERIORES","MECANICA ANALITICA","MECANICA CLASICA","MECANICA CUANTICA","MECANICA DE MEDIOS CONTINUOS","MECANICA ESTADISTICA","MEDICION E INSTRUMENTACION","METODOS NUMERICOS","METROLOGIA","NEUROFISIOLOGIA","NORMATIVIDAD EN INGENIERIA","OPTICA","OPTIMIZACION Y SIMULACION DE PROCESOS","PRINCIPIOS DE OPERACION DE EQUIPOS MEDICOS","PROBABILIDAD Y ESTADISTICA","PROBLEMAS SOCIALES Y DEBATES CONTEMPORANEOS","PROCESOS DE SEPARACION","PROGRAMACION BASICA","PROGRAMACION ORIENTADA A OBJETOS Y EVENTOS","PROPIEDADES FISICOQUIMICAS","QUIMICA ANALITICA","QUIMICA GENERAL","QUIMICA INORGANICA DESCRIPTIVA","QUIMICA ORGANICA AVANZADA","QUIMICA ORGANICA BASICA","RADIOLOGIA","RELATIVIDAD GENERAL","SEGURIDAD E HIGIENE LABORAL","SEGURIDAD EN EQUIPO MEDICO","SINTESIS DE POLIMEROS","SISTEMAS LINEALES","TELEMEDICINA","TEMAS SELECTOS DE FISICA (FISICA NUCLEAR)","TEMAS SELECTOS DE FISICA (MACHINE LEARNING)","TEORIA CUANTICA DE CAMPOS","TERMODINAMICA","TERMODINAMICA QUIMICA","TOPICOS SELECTOS DE ASTRONOMIA","TOPICOS SELECTOS DE ENERGIAS ALTERNAS","VARIABLE COMPLEJA"]
	const [displayedSubjects, setDisplaySubjects] = useState(subjectNames)
	return (
		<section className='SubjectListSection'>
			<ul className='SubjectList'>

				<SearchButton
					subjects={subjectNames}
					setDisplaySubjects = {setDisplaySubjects}
				/>
				{displayedSubjects.map((subject, key) => (
					<SubjectItem
						key={key}
						subject={subject}
					/>
				))}

			</ul>
		</section>
	)
}

export default SubjectList