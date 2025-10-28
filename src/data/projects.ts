import { Project } from '../types';
import landingGearImg from '../img/landing-gear-of-an-aircraft.jpeg';
import abc from '../img/Picture1.jpg';
import def from '../img/Picture2.jpg';
import xyz from '../img/Time-Cycle-Time-And-Lead-Time.webp';
import ghi from '../img/Airplane Landing Gear.pdf';
import qrx from '../img/Electric Skateboard.pdf';
import hij from '../img/Time cycle analysis.pdf';
import klm from '../img/TDS ECU flashing.pdf';
import pqr from '../img/Reduction of defects in Kanger 2.pdf';
import stu from '../img/Advanced techniques for battery charging.pdf';
import vwx from '../img/download.jpeg';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Impact of nanomaterials in Lithium-Ion Batteries and its Life cycle assessment (Publication pending)-',
    description: 'Ongoing research on nanomaterials like graphene, carbon nanotubes and silicon nanoparticles that could be used in traditional Lithium-ion batteries (cathodes and anodes) replacing the traditional material or coating the cathode or anode which could have a very positive impact on the electro-chemical performance of the battery as well as have environmental benefits for mining of the traditional minerals..',
    tags: ['Electric Vehicles', 'System Design', 'Battery Management', 'Sustainability'],
    imageUrl: 'https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/ev-powertrain',
    repoUrl: 'https://example.com/technical-specs',
  },
  {
    id: '2',
    title: '- Design and formation of Advanced Driver Assistant System (ADAS) with an automobile working model ',
    description: 'Developed and implemented advanced driver assistance systems (ADAS) with emergency braking and lane departure prevention.',
    tags: ['ADAS', 'Safety Systems', 'Autonomous', 'Sensor Fusion'],
    imageUrl: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://github.com/HarshalBhatt2211/Adas-system',
    repoUrl: 'https://github.com/HarshalBhatt2211/Adas-system',
  },
  {
    id: '3',
    title: ' Reduction of defects in Kanger 2(TATA Motors) ',
    description: 'Improved the quality of the Nexon EV, specifically addressing defects in the upcoming Kanger 2.0 variant (featuring a 40kWh battery). .',
    tags: ['Production and Planning', 'Testing & Validation', 'Automobile engineering', 'Testing', 'Problem Solving and Analytical skills'],
    imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: pqr,
    repoUrl: 'https://example.com/aero-data',
  },

  {
    id: '4',
    title: ' Design and Fabrication of a Remote controlled Foldable Electric Skateboard. (Symbiosis) ',
    description: 'Identified a growing demand for portable, eco-friendly urban mobility solutions and decided to undertake a capstone project to design and fabricate a remote-controlled foldable electric skateboard..',
    tags: ['CFD Analysis', 'Design', 'Problem Solving and Analytical skills', 'CAD/CAM Software'],
    imageUrl: abc,
    demoUrl: qrx,
    repoUrl: 'https://example.com/aero-data',
  },
  {
    id: '5',
    title: 'Design and Fabrication of a Practical Model of an Airplane Landing Gear (Symbiosis)',
    description: 'Demonstrated a real-world mechanism and, chose to design and fabricate a simple model of an airplane landing gear.',
    tags: [ 'Design', 'Testing', 'Automobile engineering','Problem Solving and Analytical skills' ],
    imageUrl: landingGearImg,
    demoUrl: ghi,
    repoUrl: 'https://example.com/aero-data',
  },{
    id: '6',
    title: ' Focussing on using the TDS tool for ECU flashing(Tata Motors) ',
    description: 'Task of majorly focussing on the defects in the ecu and provide solutions minimizing repetition.',
    tags: [ 'Testing & Validation', 'Microsoft office'],
    imageUrl: def,
    demoUrl: klm,
    repoUrl: 'https://example.com/aero-data',
  },{
    id: '7',
    title: 'Time cycle analysis and reduction of time of every station to station of EV shop and reduce manpower',
    description: 'Task was to analyse and reduce the cycle time and waiting time for each station in the EV shop’s assembly process.',
    tags: ['Cycle time management', 'Testing and Validation'],
    imageUrl: xyz,
    demoUrl: hij,
    repoUrl: 'https://example.com/aero-data',
  },
  {
    id: '8',
    title: 'Advanced techniques for battery charging and Automatic Automobile Parking Systems',
    description: 'Conducted research on advanced battery charging techniques to support the development of electric vehicles and integrating sensors and control algorithms to enable semi-autonomous parallel and perpendicular parking, a feature aligned with Tata Motors’ roadmap for Advanced Driver Assistance Systems',
    tags: ['Electric Vehicle System', 'Research', 'Battery Management'],
    imageUrl: vwx,
    demoUrl: stu,
    repoUrl: 'https://example.com/aero-data',
  },
];
