<template>
  <div class="wrapper">
    <div class="margins">
      <h2 class="heading">Fiber Optic Networks</h2>
      <div class="mb-4">
        <div class="flex justify-end mt-4">
          <router-link to="/" class="home-button">
            <button class="action-button">Home</button>
          </router-link>
        </div>
      </div>
      <section class="description">
        <p>
          Fibre Optic PON uses a light-signal for transmitting data, which is widely understood. However, not everyone is aware that
          there are various ways to enable these signals to reach their destination.
        </p>
        <p>
          Accordingly, several types of optical networks are employed to achieve this:
        </p>
        <ul class="toolkit">
          <li class="tool">
            <span class="tool-title">Firstly - Active Optical Network (AON)</span>
          </li>
          <li class="tool">
            <span class="tool-title">Secondly - Passive Optical Network (PON)</span>
          </li>
        </ul>
       
        <h2 class="tool-title gradient__text">Fiber Optic Passive Optical Network</h2>
        <p class="tool-description">
          PON technologies are being adopted in the telecom industry. By implementing a point-to-multipoint framework, a single PON
          fibre optic network can serve multiple endpoints from one optic fibre.
        </p>

        <p class="tool-description">
          The attenuation of light through an optical splitter is symmetrical. Whether a splitter is combining light in upstream
          transmission or dividing it downstream, it introduces the same attenuation to the optical signal.
        </p>

        <h3 class="tool-title gradient__text">PON Network Components</h3>
        <p class="tool-description">
          A PON network includes multiple “Optical Network Units” (ONUs) and “Optical Line Terminations” (OLTs).
        </p>

        <h3 class="tool-title gradient__text">Advantages of PON</h3>
        <ul class="toolkit">
          <li class="tool">Decreased operational, installation, and network energy costs.</li>
          <li class="tool">Reduced network infrastructure requirements.</li>
          <li class="tool">No need for network switches.</li>
        </ul>
      </section>
        <footer class="margins footer">
        <div class="social">
          <a
            href="https://x.com/ilostmyipad"
            rel="noopener noreferrer"
            target="_blank"
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
  color: #000;
}

.wrapper {
  background-color: #0c0a09;
  color: #fff;
  padding: 2rem;
  border-radius: 0px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.margins {
  padding-left: 1rem;
  padding-right: 1rem;
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
  gap: 2rem;
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
  background: linear-gradient(90deg, #7bceb6 10%, #12a87b 40%, #0fcf97 60%, #7bceb6 100%);
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
  text-decoration: none;
  color: #000;
}

.hover-underline-animation {
  position: relative;
  display: inline-block;
}

.hover-underline-animation:after {
  content: "";
  background: #12a87b;
  height: 2px;
  left: 50%;
  position: absolute;
  transition: all 0.3s ease;
  width: 0;
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
