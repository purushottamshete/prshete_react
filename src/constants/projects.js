import { martech, brickiq, mhl } from "./images";

const PROJECTS = [
    {
        'id': 1,
        'initial': 'M',
        'title' : 'Martech',
        'image' : martech,
        'giturl': "https://github.com/purushottamshete/martech",
        'subtitle' : 'Python API Backend',
        'summary': 'Backend Rest API for Martech', 
        'description': 'Backend Rest API for a Italy client providing functionality of Authentication (JWT), Role based Authorization and CRUD. Backend is developed using Python3, FastAPI, Posgtres, Docker and Git', 
    },
    {
        'id': 2,
        'initial': 'B',
        'title' : 'BrickIq',
        'image' : brickiq,
        'giturl': "https://github.com/purushottamshete/brickiq",
        'subtitle' : 'Python API Backend',
        'summary': 'Backend Rest API for Real-estate Start-up', 
        'description': 'Backend Rest API for a real-estate client providing functionality of Authentication, Geospatial Search for Properties, Property trends API. The backend is developed using Python3, FastAPI, MongoDB, Docker and Git'
    },
    {
        'id': 3,
        'initial': 'M',
        'title' : 'MyHomeLease.com',
        'image' : mhl,
        'giturl': "https://www.myhomelease.com",
        'subtitle' : 'Online Leave and Lisense',
        'summary': 'Website for Online Leave and License platform', 
        'description': 'Website is developed for RRPL client, Website provides leave and license price calculator, dynamic SEO funnel creation, plan signup. The website is developed using Python3, Django, Mysql, Git and Digital Ocean', 
    },
];

export default PROJECTS;