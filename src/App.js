import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Visualize from "./components/Visualize.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path:"/visualize",
        element:<Visualize />
    }
  ]);

export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const opt = {
    background: {
        color: {
          value: '#000'
        }
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
            speed: 3
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true,
            value_area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true,
      zIndex:-1

  }

  return (
    <div className="App">
      
    <RouterProvider router={router} />

     

    <Particles
      id="tsparticles"
      init={particlesInit}
      options={opt}
    //   options={{
    //     "fullScreen": {
    //         "enable": true,
    //         "zIndex": -1
    //     },
    //     "particles": {
          
    //         "number": {
    //             "value": 20,
    //             "density": {
    //                 "enable": false,
    //                 "value_area": 800
    //             }
    //         },
    //         "color": {
    //             "value": "#ebe8d6"
    //         },
    //         "shape": {
    //             "type": "circle",
    //         },
    //         "opacity": {
    //             "value": 0.8,
    //             "random": false,
    //             "anim": {
    //                 "enable": false,
    //                 "speed": 1,
    //                 "opacity_min": 0.1,
    //                 "sync": false
    //             }
    //         },
    //         "size": {
    //             "value": 4,
    //             "random": false,
    //             "anim": {
    //                 "enable": false,
    //                 "speed": 40,
    //                 "size_min": 0.1,
    //                 "sync": false
    //             }
    //         },
    //         "rotate": {
    //             "value": 0,
    //             "random": true,
    //             "direction": "clockwise",
    //             "animation": {
    //                 "enable": true,
    //                 "speed": 5,
    //                 "sync": false
    //             }
    //         },
    //         "line_linked": {
    //             "enable": true,
    //             "distance": 600,
    //             "color": "#3d723d",
    //             "opacity": 0.4,
    //             "width": 2
    //         },
    //         "move": {
    //             "enable": true,
    //             "speed": 2,
    //             "direction": "none",
    //             "random": false,
    //             "straight": false,
    //             "out_mode": "out",
    //             "attract": {
    //                 "enable": false,
    //                 "rotateX": 600,
    //                 "rotateY": 1200
    //             }
    //         }
    //     },
    //     "interactivity": {
    //         "events": {
    //             "onhover": {
    //                 "enable": true,
    //                 "mode": ["repulse"]
    //             },
    //             "onclick": {
    //                 "enable": false,
    //                 "mode": "push"
    //             },
    //             "resize": false
    //         },
    //         "modes": {
    //             "grab": {
    //                 "distance": 400,
    //                 "line_linked": {
    //                     "opacity": 1
    //                 }
    //             },
    //             "bubble": {
    //                 "distance": 400,
    //                 "size": 40,
    //                 "duration": 2,
    //                 "opacity": 8,
    //                 "speed": 3
    //             },
    //             "repulse": {
    //                 "distance": 200
    //             },
    //             "push": {
    //                 "particles_nb": 4
    //             },
    //             "remove": {
    //                 "particles_nb": 2
    //             }
    //         }
    //     },
    //     "retina_detect": true,
    //     "background": {
    //         "color": "#0d47a1",
    //         "image": "",
    //         "position": "50% 50%",
    //         "repeat": "no-repeat",
    //         "size": "cover"
    //     }
    // }}
    />
      
    </div>
  );
}
