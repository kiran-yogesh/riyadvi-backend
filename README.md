 Riyadvi Software Technologies — Revamped Corporate Digital Experience

> Full Stack MERN Project + 3D Interactive WebGL Experience + AI-Assisted Architecture  
> Repository-backend: [https://github.com/kiran-yogesh/riyadvi-backend.git](https://github.com/kiran-yogesh/riyadvi-backend.git)
> Repository-frontend: [https://github.com/kiran-yogesh/riyadvi-frontend.git]
(https://github.com/kiran-yogesh/riyadvi-frontend.git)
---

1. PROJECT OVERVIEW

Riyadvi Software Technologies is a premier *Technology & Digital Solutions Partner*. This website revamp transforms the corporate digital presence into a premium, interactive, multi-page application powered by the MERN stack, Three.js WebGL graphics, GSAP scroll-driven storytelling, and an integrated Lead Management System.

---

 2. CORE FEATURES

- *Dynamic Multi-Page Architecture*: 14 distinct routes with React Router v6.
- *Interactive 3D WebGL Heroes*:
  - *Connected Node Graph Hero*: Interactive R3F canvas with raycasting and particle links (`HeroCanvas.jsx`).
  - *Interactive 3D Tech Constellation*: Fibonacci 3D sphere orbiting tech badges (`TechEcosystemCanvas.jsx`).
  - *Interactive 6 Services Canvases*: 3D browser, mobile device, growth chart, AR/VR torus, and floating UI cards (`ServiceCanvasFactory.jsx`).
  - *Interactive 3D Case Study Viewer*: Modal 3D viewer for client projects (`ThreeDViewerModal.jsx`).
  - *3D Milestone Globe*: Rotating company growth globe (`TimelineGlobeCanvas.jsx`).
- *Digital Transformation Storytelling*: GSAP ScrollTrigger 6-step interactive flow.
- *Full Lead Capture Funnels*:
  - `POST /api/contact`: General Enquiries with requirement filters.
  - `POST /api/consultation`: Free Technical Strategy booking.
  - `POST /api/health-checkup`: 5-Step interactive Business Health Checkup wizard.
  - `POST /api/lead-magnet`: Software Project Planning Guide instant PDF unlock.
  - `POST /api/applications`: Job applications with resume link upload.
- **JWT-Protected Admin Dashboard**: Control panel managing all submitted leads, stats, and candidate resumes at `/admin/dashboard`.

---

 3. TECHNOLOGY STACK

- *Frontend*: React 18, Vite, React Router v6, Tailwind CSS, Lucide Icons, Axios.
- *3D Graphics & Animations*: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), GSAP, GSAP ScrollTrigger, Lenis.
- *Backend*: Node.js, Express.js, JWT, bcryptjs, Express-Validator, CORS.
- *Database*: MongoDB Atlas, Mongoose ODM.

---

 4. LOCAL SETUP & INSTALLATION

 Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- MongoDB (Local or MongoDB Atlas connection string)

 1. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `/backend`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/riyadvi_db
JWT_SECRET=riyadvi_jwt_super_secret_key_2026_tech_partner
CORS_ORIGIN=http://localhost:5173
```
Seed initial services, case studies, blog posts, jobs, and admin user:
```bash
npm run seed
```
Start development server:
```bash
npm run dev
```

 2. Frontend Setup
```bash
cd frontend
npm install
```
Start Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---
 5. API ENDPOINTS SPECIFICATION

| Method | Endpoint | Description | Request Payload | Access |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/contact` | Submit general contact enquiry | `{ name, email, phone, company, requirement, message }` | Public |
| `POST` | `/api/consultation` | Book technical consultation | `{ fullName, email, phone, preferredDate, budget, description }` | Public |
| `POST` | `/api/health-checkup` | Submit 5-step Business Health Checkup audit | `{ companyName, industry, contactPerson, email, phone, primaryGoal }` | Public |
| `POST` | `/api/lead-magnet` | Download Software Project Planning Guide | `{ name, company, email, phone }` | Public |
| `POST` | `/api/applications` | Submit candidate application for job | `{ positionTitle, applicantName, email, phone, resumeUrl, coverLetterMessage }` | Public |
| `GET` | `/api/services` | Fetch all core services | None | Public |
| `GET` | `/api/services/:slug` | Fetch single service by slug | Path param `:slug` | Public |
| `GET` | `/api/portfolio` | Fetch all case studies | None | Public |
| `GET` | `/api/portfolio/:slug` | Fetch case study details | Path param `:slug` | Public |
| `GET` | `/api/blog` | Fetch blog posts | None | Public |
| `GET` | `/api/jobs` | Fetch open career positions | None | Public |
| `POST` | `/api/admin/login` | Admin authentication | `{ email, password }` | Public |
| `GET` | `/api/admin/stats` | Fetch lead totals for dashboard | Bearer Token | Admin JWT |
| `GET` | `/api/admin/leads` | Fetch tabular lists of all leads | Bearer Token | Admin JWT |

---

 6. AI USAGE DOCUMENTATION (MANDATORY ASSIGNMENT SECTION)

As required by the assignment specification, AI tools were leveraged as accelerator partners for initial code scaffolding, 3D math calculations, and schema validations. All AI-generated outputs were manually reviewed, refactored, and integrated into the Riyadvi design system.

| AI Tool Name | Purpose | Example Prompt Used | Generated Output | Manual Modifications & Refactoring | Selection Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *Gemini 3.6 / Claude* | Architecture Planning & 3D Math Calculations | *"Generate React Three Fiber code for connected 3D nodes with glittering metallic wires."* | Basic R3F canvas structure rendering Spheres and Lines. | Refactored node distance vector math, added `dpr={[1, 1.5]}` performance limits, and styled emissive metallic gold shaders (`#D4AF37`). | Superior understanding of WebGL geometry and 3D coordinate math. |
| *ChatGPT* | Mongoose Data Schemas & API Route Validation | *"Write Express controller and Mongoose schema for a 5-step Business Health Checkup form."* | Standard Mongoose schema with basic string fields. | Added custom enum validations, in-memory fallback store support for offline testing, and JWT security middleware. | Fast generation of repetitive boilerplate Express code. |
| *Cursor / Copilot* | Tailwind CSS Component Refactoring | *"Convert standard card component to a glassmorphic Tailwind container with gold hover border."* | Tailwind class strings. | Fine-tuned backdrop blur values (`backdrop-blur-xl`), added custom gold glow shadow utility tokens (`shadow-gold-glow`). | Seamless inline editor code completions. |

---

 7. 3D & ANIMATION LIBRARIES USED

1. *Three.js (`three`)*: Core WebGL rendering engine for 3D meshes, lights, and materials.
2. *React Three Fiber (`@react-three/fiber`): Declarative React wrapper for Three.js scene management.
3. *Drei (`@react-three/drei`)*: Production helpers including `OrbitControls`, `Float`, `Text`, and `MeshWobbleMaterial`.
4. *GSAP & ScrollTrigger*: Scroll-driven storytelling timelines and smooth element reveals.
5. *Lenis*: Inertial smooth scrolling engine for premium desktop feel.

---

 8. PERFORMANCE OPTIMIZATIONS

- *DPR Cap*: Canvas Device Pixel Ratio capped at `1.5` to prevent GPU overheating on retina screens.
- *Adaptive Canvas*: Canvas raycasting disabled during scroll to maintain 60 FPS.
- *Graceful Fallbacks*: Hybrid database controllers fallback to in-memory stores if local MongoDB is offline, guaranteeing 100% API uptime.
- *Font Display*: Google Fonts (`Inter`, `Poppins`, `Montserrat`) loaded with `display=swap`.

---

 9. DEPLOYMENT INSTRUCTIONS

- *Frontend*: Deployed to *Vercel* (`npm run build`).
- *Backend*: Deployed to *Render Cloud Host* (`node server.js`).
- *Database*: *MongoDB Atlas* cluster.

---

 10. ADMIN CREDENTIALS FOR TESTING

- **URL**: `/admin/login`
- **Email**: `admin@riyadvisoftwaretechnologies.com`
- **Password**: `admin123`
Riyadvi Software Technologies. Revamped Corporate Digital Experience

> Full Stack MERN. A 3D Interactive WebGL Experience, all powered by AI‑assisted Architecture. Repository: [https://github.com/riyadvisoftwaretechnologies/corporate-website](https://github.com/riyadvisoftwaretechnologies/corporate-website)

---

1. PROJECT OVERVIEW

Riyadvi Software Technologies is a Technology & Digital Solutions Partner. This website revamp turns the digital presence into a premium, interactive multi‑page application that uses the MERN stack Three.js WebGL graphics, GSAP scroll‑driven storytelling and a built‑in Lead Management System.

---

 2. CORE FEATURES

- ** Multi-Page Architecture**: 14 separate routes using React Router v6.

- **Interactive 3D WebGL Heroes**:

**Connected Node Graph Hero**: R3F canvas that uses raycasting and particle links (`HeroCanvas.jsx`).

**Interactive 3D Tech Constellation**: A Fibonacci 3D that orbits tech badges (`TechEcosystemCanvas.jsx`).

**Interactive 6 Services Canvases**: 3D browser, device, growth chart, AR/VR torus and floating UI cards (`ServiceCanvasFactory.jsx`).

**Interactive 3D Case Study Viewer**: A modal 3D viewer that shows client projects (`ThreeDViewerModal.jsx`).

**3D Milestone Globe**: A rotating globe that shows company growth (`TimelineGlobeCanvas.jsx`).

- **Digital Transformation Storytelling**: ScrollTrigger with a 6‑step interactive flow.

- **Full Lead Capture Funnels**:

`POST /api/contact`: enquiries that include requirement filters.

`POST /api/consultation`: Free technical strategy booking.

`POST /api/health-checkup`: A 5‑step interactive business health checkup wizard.

`POST /api/lead-magnet`: Instant PDF unlock for a software project planning guide.

`POST /api/applications`: Job applications that allow resume link uploads.

- **JWT‑Protected Admin Dashboard**: A control panel that manages all submitted leads statistics and candidate resumes at `/admin/dashboard`.

---

 3. TECHNOLOGY STACK

- **Frontend**: React 18 Vite, React Router v6, Tailwind CSS, Lucide Icons, Axios.

- **3D. Animations**: Three.js, React Three Fiber (`@react-three/fiber`) Drei (`@react-three/drei`) GSAP GSAP ScrollTrigger, Lenis.

- **Backend**: Node.js, Express.js, JWT, bcryptjs, Express-Validator, CORS.

- **Database**: MongoDB Atlas, Mongoose ODM.

---

 4. LOCAL SETUP & INSTALLATION

 Prerequisites

- Node.js (v18.0.0 or higher)

- npm (v9.0.0 or higher)

- MongoDB (Local or MongoDB Atlas connection string)

  1. Backend Setup

```bash

cd backend

npm install

```

Create a `.env` file in `/backend`:

```env

PORT=5000

NODE_ENV=development

MONGO_URI=mongodb://localhost:27017/riyadvi_db

JWT_SECRET=riyadvi_jwt_super_secret_key_2026_tech_partner

CORS_ORIGIN=http://localhost:5173

```

Seed services, case studies, blog posts, jobs and admin user:

```bash

npm run seed

```

Start development server:

```bash

npm run dev

```

 2. Frontend Setup

```bash

cd frontend

npm install

```

Start Vite development server:

```bash

npm run dev

```

Open [http://localhost:5173](http://localhost:5173), in your browser.

---

 5. API ENDPOINTS SPECIFICATION

Method | Endpoint | Description | Request Payload | Access |

| :--- | :--- | :--- | :--- | :--- |

POST` | `/api/contact` | Submit general contact enquiry | `{ name, email, phone, company, requirement, message }` | Public |

| `POST` | `/api/consultation` | Book consultation | `{ email, phone, preferredDate, budget, description }` Public |

| `POST` | `/api/health-checkup` | Submit a 5‑step Business Health Checkup audit | `{ industry, contactPerson, email, phone, primaryGoal }` | Public |

| `POST` | `/api/lead-magnet` | Download a Software Project Planning Guide | `{ name, company, email, phone }` | Public |

| `POST` | `/api/applications` | Submit a candidate application for a job | `{ positionTitle, applicantName, email, phone, resumeUrl, coverLetterMessage }` Public |

| `GET` | `/api/services` | Fetch all core services | None | |

| `GET` /api/services/:slug` | Fetch a single service by slug | Path param `:slug` | Public |

| `GET` /api/portfolio` | Fetch all case studies | None | Public |

| `GET` | `/api/portfolio/:slug` | Fetch case study details | Path param `:slug` Public |

| `GET` | `/api/blog` | Fetch blog posts | None | Public |

| `GET` | `/api/jobs` | Fetch open career positions | None | |

| `POST` | `/api/admin/login` | Admin authentication | `{ email, password }` | Public |

| `GET` /api/admin/stats` | Fetch lead totals for dashboard | Bearer Token | Admin JWT |

GET` | `/api/admin/leads` | Fetch tabular lists of all leads | Bearer Token | Admin JWT |

---

 6. AI USAGE DOCUMENTATION (MANDATORY ASSIGNMENT SECTION)

The assignment required using AI tools as helpers for code scaffolding 3D math calculations and schema validations. All AI-generated outputs were manually reviewed, refactored and integrated into the Riyadvi design system.

| AI Tool Name | Purpose | Example Prompt Used | Generated Output | Manual Modifications & Refactoring | Selection Rationale |

| :--- | :--- | :--- | :--- | :--- | :---

| **Gemini 3.6 / Claude** | Plan architecture and compute 3D math | *"Generate React Three Fiber code for 3D nodes with glittering metallic wires."* | Basic R3F canvas with spheres and lines | Changed node distance math added `dpr={[1, 1.5]}` limits and styled gold shaders (`#D4AF37`) | Great understanding of WebGL geometry and 3D math |

| **ChatGPT** | Create Mongoose schemas. Validate API routes | *"Write Express controller and Mongoose schema for a 5‑step Business Health Checkup form."* | Standard Mongoose schema with string fields | Added enum validation, in‑memory fallback store for offline testing and JWT security middleware | Fast generation of boilerplate |

| **Cursor / Copilot** | Refactor Tailwind CSS components | *"Convert card component to a glassmorphic Tailwind container with gold hover border."* | Tailwind class strings | Fine‑tuned blur (`backdrop-blur-xl`) and added gold glow shadow token (`shadow-gold-glow`) | Seamless inline editor code completions |

---

 7. 3D & ANIMATION LIBRARIES USED

1. **Three.js (`three`)**: Core WebGL rendering engine.

2. **React Three Fiber (`@react-three/fiber`)**: Declarative React wrapper for Three.js.

3. **Drei (`@react-three/drei`)**: Helpers such as `OrbitControls` `Float` `Text` `MeshWobbleMaterial`.

4. **GSAP & ScrollTrigger**: Scroll‑driven. Smooth reveals.

5. **Lenis**: Inertial smooth scrolling engine for a premium desktop feel.

---

 8. PERFORMANCE OPTIMIZATIONS

- **DPR Cap**: Canvas Device Pixel Ratio capped at `1.5` to prevent GPU overheating on retina screens.

- **Adaptive Canvas**: Canvas raycasting disabled, during scroll to maintain 60 FPS.

- **Graceful Fallbacks**: When local MongoDB is offline hybrid database controllers will fall back to in-memory stores ensuring that the API is always up.

- **Font Display**: I use Google Fonts (`Inter` `Poppins` `Montserrat`) loaded with `display=swap`.

---

 9. DEPLOYMENT INSTRUCTIONS

- *Frontend*: I deploy the end to *Vercel* by running `npm run build`.

- *Backend*: I deploy the end to *Render Cloud Host* by executing `node server.js`.

- *Database*: I use a *MongoDB Atlas* cluster.

---
 10. ADMIN CREDENTIALS FOR TESTING

- *URL*: I use `/admin/login`, for admin access.

- *Email*: I use `admin@riyadvisoftwaretechnologies.com` as the admin email.

- *Password*: I set the password to `admin123`.