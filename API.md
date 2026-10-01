# Riyadvi Software Technologies — REST API Documentation

> **Base URL**: `http://localhost:5000/api` (or environment `VITE_API_URL`)  
> **Format**: JSON (`Content-Type: application/json`)  
> **Auth Header**: `Authorization: Bearer <JWT_TOKEN>`  

---

## 1. PUBLIC FORM SUBMISSIONS

### 1.1 Contact Enquiry
- **METHOD**: `POST`
- **ENDPOINT**: `/api/contact`
- **AUTH REQUIRED**: No
- **REQUEST BODY**:
  ```json
  {
    "name": "John Doe",
    "email": "john@company.com",
    "phone": "+91 98765 43210",
    "company": "Acme Inc",
    "requirement": "Web Development",
    "message": "We need a full-stack MERN portal."
  }
  ```
- **SUCCESS RESPONSE (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Thank you for reaching out! The Riyadvi team will contact you within 24 hours.",
    "data": { "_id": "...", "status": "new", "createdAt": "..." }
  }
  ```
- **ERROR RESPONSE (400 Bad Request)**:
  ```json
  {
    "success": false,
    "message": "Validation failed",
    "errors": [{ "field": "email", "message": "Valid email address is required" }]
  }
  ```

---

### 1.2 Consultation Request
- **METHOD**: `POST`
- **ENDPOINT**: `/api/consultation`
- **AUTH REQUIRED**: No
- **REQUEST BODY**:
  ```json
  {
    "name": "Sarah Smith",
    "email": "sarah@tech.io",
    "phone": "+91 98765 11111",
    "company": "Tech Corp",
    "service": "3D Modeling",
    "requirement": "Product Configurator",
    "preferredContactMethod": "Video Call",
    "message": "Scoping consultation request."
  }
  ```
- **SUCCESS RESPONSE (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Consultation request received! Our solution architect will connect with you to confirm the schedule.",
    "data": { "_id": "...", "status": "pending" }
  }
  ```

---

### 1.3 Business Health Checkup Submission
- **METHOD**: `POST`
- **ENDPOINT**: `/api/health-checkup`
- **AUTH REQUIRED**: No
- **REQUEST BODY**:
  ```json
  {
    "companyName": "Acme Corp",
    "industry": "Technology",
    "contactPerson": "Alex Vance",
    "email": "alex@acme.com",
    "phone": "+91 98765 22222",
    "websiteUrl": "https://acme.com",
    "marketingChallenges": ["Low Conversion Rates", "Slow Page Load Times"],
    "techStackCurrent": ["WordPress / PHP"],
    "primaryGoal": "Scale to MERN stack with 3D elements"
  }
  ```
- **SUCCESS RESPONSE (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Business Health Checkup submitted! Your customized technical audit report is being prepared.",
    "data": { "_id": "...", "status": "new" }
  }
  ```

---

### 1.4 Lead Magnet Download (Software Project Planning Guide)
- **METHOD**: `POST`
- **ENDPOINT**: `/api/lead-magnet`
- **AUTH REQUIRED**: No
- **REQUEST BODY**:
  ```json
  {
    "name": "Jane Miller",
    "company": "SaaS Labs",
    "email": "jane@saaslabs.com",
    "phone": "+91 98765 33333"
  }
  ```
- **SUCCESS RESPONSE (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Access granted! Your Software Project Planning Guide PDF download is ready.",
    "downloadUrl": "/assets/Software_Project_Planning_Guide_Riyadvi.pdf"
  }
  ```

---

### 1.5 Career Application Submission
- **METHOD**: `POST`
- **ENDPOINT**: `/api/applications`
- **AUTH REQUIRED**: No
- **REQUEST BODY**:
  ```json
  {
    "name": "David Clark",
    "email": "david@dev.com",
    "phone": "+91 98765 44444",
    "position": "Senior MERN Full-Stack Engineer",
    "resumeUrl": "https://drive.google.com/resume.pdf",
    "message": "5 years full-stack experience."
  }
  ```
- **SUCCESS RESPONSE (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Application submitted successfully! Our HR team will review your profile.",
    "data": { "_id": "...", "status": "submitted" }
  }
  ```

---

## 2. DYNAMIC CONTENT APIs

### 2.1 Get Services List
- **METHOD**: `GET`
- **ENDPOINT**: `/api/services`
- **QUERY PARAMETERS**: `?featured=true`
- **SUCCESS RESPONSE (200 OK)**:
  ```json
  {
    "success": true,
    "count": 6,
    "data": [{ "title": "Web Development", "slug": "web-development", "sceneType": "browser" }]
  }
  ```

### 2.2 Get Service Detail by Slug
- **METHOD**: `GET`
- **ENDPOINT**: `/api/services/:slug`
- **SUCCESS RESPONSE (200 OK)**:
  ```json
  {
    "success": true,
    "data": { "title": "Web Development", "slug": "web-development", "tagline": "..." }
  }
  ```

---

### 2.3 Get Portfolio Case Studies
- **METHOD**: `GET`
- **ENDPOINT**: `/api/portfolio`
- **QUERY PARAMETERS**: `?industry=IoT%20%26%20CleanTech&featured=true`
- **SUCCESS RESPONSE (200 OK)**:
  ```json
  {
    "success": true,
    "count": 10,
    "data": [{ "title": "Puratap Smart Water System", "slug": "puratap" }]
  }
  ```

### 2.4 Get Portfolio Detail by Slug
- **METHOD**: `GET`
- **ENDPOINT**: `/api/portfolio/:slug`
- **SUCCESS RESPONSE (200 OK)**:
  ```json
  {
    "success": true,
    "data": { "title": "Puratap Smart Water System", "client": "Puratap", "challenge": "..." }
  }
  ```

---

### 2.5 Get Blog Posts (With Search & Category Filter)
- **METHOD**: `GET`
- **ENDPOINT**: `/api/blog`
- **QUERY PARAMETERS**: `?search=react&category=Engineering%20%26%203D&page=1&limit=10`
- **SUCCESS RESPONSE (200 OK)**:
  ```json
  {
    "success": true,
    "count": 1,
    "data": [{ "title": "Building High-Performance WebGL 3D Experiences in React" }],
    "pagination": { "page": 1, "limit": 10, "total": 1, "totalPages": 1 }
  }
  ```

---

### 2.6 Get Job Openings (With Department Filter)
- **METHOD**: `GET`
- **ENDPOINT**: `/api/jobs`
- **QUERY PARAMETERS**: `?department=Engineering`
- **SUCCESS RESPONSE (200 OK)**:
  ```json
  {
    "success": true,
    "count": 3,
    "data": [{ "title": "Senior MERN Full-Stack Engineer", "department": "Engineering" }]
  }
  ```

---

## 3. ADMIN AUTHENTICATION & PROTECTED LEAD APIS

### 3.1 Admin Login
- **METHOD**: `POST`
- **ENDPOINT**: `/api/admin/login`
- **REQUEST BODY**:
  ```json
  {
    "email": "admin@riyadvisoftwaretechnologies.com",
    "password": "admin123"
  }
  ```
- **SUCCESS RESPONSE (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Admin authentication successful.",
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
      "admin": { "name": "Riyadvi Super Admin", "email": "admin@riyadvisoftwaretechnologies.com", "role": "SuperAdmin" }
    }
  }
  ```

---

### 3.2 Admin Dashboard Overview
- **METHOD**: `GET`
- **ENDPOINT**: `/api/admin/dashboard`
- **AUTH REQUIRED**: Yes (`Authorization: Bearer <JWT_TOKEN>`)
- **SUCCESS RESPONSE (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Dashboard statistics retrieved",
    "data": {
      "totalEnquiries": 12,
      "totalConsultations": 4,
      "totalHealthAudits": 8,
      "totalLeadMagnets": 19,
      "totalApplications": 5,
      "totalLeads": 48
    }
  }
  ```

---

### 3.3 Protected Lead Management (Admin Only)
- `GET /api/contact` (Paginated list of enquiries)
- `GET /api/contact/:id` (Single enquiry detail)
- `PATCH /api/contact/:id/status` (Update status: `{ "status": "contacted" }`)
- `GET /api/consultation` (Paginated consultation requests)
- `GET /api/health-checkup` (Paginated health audit leads)
- `GET /api/lead-magnet` (Paginated lead magnet leads)
- `GET /api/applications` (Paginated job candidate applications)

---

## 4. HEALTH CHECK
- **METHOD**: `GET`
- **ENDPOINT**: `/api/health`
- **RESPONSE (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Riyadvi API is running"
  }
  ```
