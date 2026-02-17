import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "bubble", "repulse"],
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.6,
                color: "#3b82f6",
              },
            },
            bubble: {
              distance: 250,
              size: 6,
              duration: 2,
              opacity: 0.8,
              color: "#60a5fa",
            },
            repulse: {
              distance: 120,
              duration: 0.4,
              speed: 0.5,
            },
            push: {
              quantity: 5,
            },
            trail: {
              delay: 0.05,
              quantity: 1,
              particles: {
                color: { value: "#93c5fd" },
                move: {
                  speed: 3,
                  outModes: { default: "destroy" },
                },
                size: { value: 2, animation: { enable: true, speed: 5, minimumValue: 0.1, sync: false } },
                opacity: { value: 0.5, animation: { enable: true, speed: 2, minimumValue: 0, sync: false } },
                life: { duration: { value: 0.8 }, count: 1 },
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb", "#1d4ed8"],
            animation: {
              enable: true,
              speed: 20,
              sync: false,
            },
          },
          links: {
            color: "#93c5fd",
            distance: 160,
            enable: true,
            opacity: 0.25,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.03,
              color: "#bfdbfe",
            },
          },
          move: {
            enable: true,
            speed: 1.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
            trail: {
              enable: true,
              length: 4,
              fill: { color: "transparent" },
            },
            warp: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 90,
          },
          opacity: {
            value: { min: 0.1, max: 0.6 },
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.05,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "triangle"],
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.3,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.03,
              opacity: 1,
              color: { value: "#60a5fa" },
            },
            lines: {
              enable: true,
              frequency: 0.01,
              opacity: 0.5,
              color: { value: "#3b82f6" },
            },
          },
          wobble: {
            enable: true,
            distance: 10,
            speed: { min: -3, max: 3 },
          },
          tilt: {
            enable: true,
            direction: "random",
            value: { min: 0, max: 360 },
            animation: {
              enable: true,
              speed: 5,
            },
          },
          roll: {
            darken: { enable: true, value: 25 },
            enlighten: { enable: true, value: 25 },
            enable: true,
            speed: { min: 5, max: 15 },
          },
        },
        detectRetina: true,
        smooth: true,
      }}
    />
  );
};

export default ParticleBackground;
