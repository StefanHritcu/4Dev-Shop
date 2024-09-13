<h1>4Dev-Shop</h1>

<p>This React project developed with Vite demonstrates the advanced use of key frontend technologies to create a simulated shopping experience, focusing on performance, accessibility, state management, and code optimization. Below are the technologies and practices implemented.</p>

<h2>Authentication & Security</h2>
<ul>
  <li><strong>JWT & OAuth</strong>: Implement user authentication using JWT (JSON Web Token) to manage login and registration, with <strong>httpOnly cookies</strong> for enhanced security. Support for login via <strong>OAuth</strong> (Google, Facebook).</li>
</ul>

<h2>Form Management & Validation</h2>
<ul>
  <li><strong>React Hook Form / Formik</strong>: Used for advanced form management, including validation, data submission, and error state handling.</li>
  <li><strong>Yup</strong>: Used for schema-based validation, ensuring data is correct before submission.</li>
</ul>

<h2>State Management</h2>
<ul>
  <li><strong>React Toolkit & Context API</strong>: Combining Redux Toolkit for global state management and Context API for local or less complex states. This combination allows efficient management of component interactions and data flow.</li>
</ul>

<h2>UI, Accessibility & Styling</h2>
<ul>
  <li><strong>Tailwind CSS with Dark Mode</strong>: Using Tailwind for creating a responsive, modern design with native dark mode support.</li>
  <li><strong>Emotion (CSS-in-JS)</strong>: For integrating dynamic and isolated styling directly into React components.</li>
  <li><strong>Progress Indicator</strong>: To help users understand the status of the registration and checkout process, using a visual indicator.</li>
  <li><strong>Overlay Loader</strong>: Added a screen-covering loader during the payment process using <strong>Stripe</strong>.</li>
</ul>

<h2>Optimization & Performance</h2>
<ul>
  <li><strong>Lazy Loading & Code Splitting</strong>: Using async loading and code splitting to enhance site performance, loading only what’s necessary.</li>
  <li><strong>React Profiler</strong>: Monitoring and optimizing component render times.</li>
  <li><strong>Manual Chunking</strong>: Manually splitting JavaScript files to optimize bundle loading.</li>
  <li><strong>Vite Plugin Bundle Analyzer</strong>: Used to analyze bundle sizes and optimize the code.</li>
</ul>

<h2>Data Handling & APIs</h2>
<ul>
  <li><strong>Axios</strong>: Used for API calls, with <strong>debounce</strong> and <strong>throttle</strong> techniques to optimize requests and prevent overloads.</li>
  <li><strong>LocalStorage</strong>: For caching product data, such as images or information, improving user experience.</li>
  <li><strong>JSON</strong>: Using JSON data to simulate products and images.</li>
</ul>

<h2>Payment & Checkout</h2>
<ul>
  <li><strong>React Stripe.js</strong>: Integrating Stripe to simulate credit card payments, managing a secure and fast checkout flow.</li>
  <li><strong>Multi-step Checkout Form</strong>: Implementing a multi-step checkout process, improving clarity for users during purchase.</li>
</ul>

<h2>SEO & Accessibility</h2>
<ul>
  <li><strong>React Helmet</strong>: Used for managing dynamic metadata, such as page titles and descriptions, to improve SEO.</li>
  <li><strong>Accessibility & Semantic HTML</strong>: Ensuring that the user interface is fully accessible, using semantic HTML practices and auditing with <strong>Lighthouse</strong>.</li>
</ul>

<h2>AI Integration</h2>
<ul>
  <li><strong>TensorFlow.js</strong>: Simulating <strong>AI Recommendations</strong> to suggest related products, demonstrating the ability to work with artificial intelligence technologies in the frontend.</li>
</ul>

<h2>Load Optimization</h2>
<ul>
  <li><strong>Prefetching & Preloading</strong>: Using prefetching techniques to pre-load future resources, improving navigation experience.</li>
</ul>

<h2>Hosting & Deployment</h2>
<ul>
  <li><strong>Netlify or Render</strong>: Using Netlify or Render for continuous deployment, ensuring that every update is immediately visible in production.</li>
</ul>
