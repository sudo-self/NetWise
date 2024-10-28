<template>
  <div class="wrapper">
    <div class="margins">
      <h2 class="heading">Fiber Optic Networks</h2>
      
      <div class="flex justify-end mt-4">
        <router-link to="/" class="home-button">
          <button class="action-button">Home</button>
        </router-link>
      </div>
      
      <section class="description">
        <p>
          Fibre Optic PON uses light signals to transmit data, though few realize the various methods to facilitate these signals' journey.
        </p>
        <p>
          Two main types of optical networks achieve this:
        </p>
        
        <h2 class="tool-title gradient__text">Fiber Optic Passive Optical Network</h2>
        <p class="tool-description">
          PON technology is widely adopted in telecom, supporting multiple endpoints through a single optic fibre with point-to-multipoint topology.
        </p>
        <p class="tool-description">
          Optical splitters attenuate light symmetrically, introducing equal attenuation to signals upstream and downstream.
        </p>

        <h3 class="tool-title gradient__text">PON Network Components</h3>
        <p class="tool-description">
          A PON network comprises “Optical Network Units” (ONUs) and “Optical Line Terminations” (OLTs), with OLTs at the service provider’s end and ONUs near the receivers.
        </p>
        
        <ul class="toolkit">
          <li class="tool">
            <span class="tool-title">Firstly - Active Optical Network (AON)</span>
          </li>
          <li class="tool">
            <span class="tool-title">Secondly - Passive Optical Network (PON)</span>
          </li>
        </ul>

        <h3 class="tool-title gradient__text">Advantages of PON</h3>
        <ul class="toolkit">
          <li class="tool">Reduced operational, installation, and energy costs.</li>
          <li class="tool">Less network infrastructure.</li>
          <li class="tool">No need for network switches.</li>
        </ul>
      </section>
      
      <footer class="margins footer">
        <div class="social">
          <a 
            href="https://x.com/ilostmyipad" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover-underline-animation"
          >
            <span class="gradient__text">@iLostmyipad</span>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>


<style scoped>
body {
  background-color: #0c0a09;
  margin: 0;
  color: #fff;
}

.wrapper {
  background-color: #0c0a09;
  padding: 2rem;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.margins {
  padding: 0 1rem;
}

.heading {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.25rem;
}

.toolkit {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tool {
  background-color: #1f2937;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.tool-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.tool-description {
  margin-bottom: 1rem;
}

.action-button {
  background-color: #12a87b;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #0fcf97;
}

.gradient__text {
  background: linear-gradient(90deg, #7bceb6, #12a87b, #0fcf97, #7bceb6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer {
  color: #444;
  padding-top: 1rem;
  margin-top: 2rem;
  text-align: center;
}

.social a {
  color: inherit;
  text-decoration: none;
}

.hover-underline-animation {
  position: relative;
  display: inline-block;
}

.hover-underline-animation:after {
  content: "";
  background: #12a87b;
  height: 2px;
  position: absolute;
  width: 0;
  left: 50%;
  transition: width 0.3s ease;
}

.hover-underline-animation:hover:after {
  left: 0;
  width: 100%;
}

@media (max-width: 768px) {
  .tool {
    padding: 1rem;
  }
}
</style>

