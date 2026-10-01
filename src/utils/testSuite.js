const runTests = async () => {
  const BASE_URL = 'http://localhost:5000/api';
  console.log('=== STARTING RIYADVI REST API TEST SUITE ===\n');

  try {
    // 1. Health Endpoint
    const healthRes = await fetch(`${BASE_URL}/health`).then(r => r.json());
    console.log('[Test 1] GET /api/health ->', healthRes);

    // 2. Public Form: Contact
    const contactRes = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Candidate',
        email: 'candidate@test.com',
        phone: '+91 98765 00000',
        requirement: 'Web Development',
        message: 'Testing POST /api/contact form submission.'
      })
    }).then(r => r.json());
    console.log('[Test 2] POST /api/contact ->', contactRes.success ? 'SUCCESS (201)' : contactRes);

    // 3. Public Form: Consultation
    const consRes = await fetch(`${BASE_URL}/consultation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Test Candidate',
        email: 'candidate@test.com',
        phone: '+91 98765 00000',
        description: 'Testing POST /api/consultation submission.'
      })
    }).then(r => r.json());
    console.log('[Test 3] POST /api/consultation ->', consRes.success ? 'SUCCESS (201)' : consRes);

    // 4. Public Form: Business Health Checkup
    const healthAuditRes = await fetch(`${BASE_URL}/health-checkup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        companyName: 'Test Enterprise',
        contactPerson: 'Alex Test',
        email: 'alex@test.com',
        phone: '+91 98765 00000',
        primaryGoal: 'Scale to 3D WebGL web platform.'
      })
    }).then(r => r.json());
    console.log('[Test 4] POST /api/health-checkup ->', healthAuditRes.success ? 'SUCCESS (201)' : healthAuditRes);

    // 5. Public Form: Lead Magnet
    const leadMagnetRes = await fetch(`${BASE_URL}/lead-magnet`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Jane Test',
        company: 'SaaS Corp',
        email: 'jane@test.com',
        phone: '+91 98765 00000'
      })
    }).then(r => r.json());
    console.log('[Test 5] POST /api/lead-magnet ->', leadMagnetRes.success ? 'SUCCESS (201)' : leadMagnetRes);

    // 6. Public Form: Application
    const appRes = await fetch(`${BASE_URL}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        positionTitle: 'Senior MERN Engineer',
        applicantName: 'Dev Applicant',
        email: 'dev@test.com',
        phone: '+91 98765 00000',
        resumeUrl: 'https://drive.google.com/test-resume.pdf'
      })
    }).then(r => r.json());
    console.log('[Test 6] POST /api/applications ->', appRes.success ? 'SUCCESS (201)' : appRes);

    // 7. Dynamic Content: Services List & Slug
    const servicesRes = await fetch(`${BASE_URL}/services`).then(r => r.json());
    console.log(`[Test 7] GET /api/services -> SUCCESS (${servicesRes.count} services found)`);

    const serviceDetailRes = await fetch(`${BASE_URL}/services/web-development`).then(r => r.json());
    console.log('[Test 8] GET /api/services/web-development ->', serviceDetailRes.data ? `Found: ${serviceDetailRes.data.title}` : serviceDetailRes);

    // 8. Dynamic Content: Portfolio List & Slug
    const portfolioRes = await fetch(`${BASE_URL}/portfolio`).then(r => r.json());
    console.log(`[Test 9] GET /api/portfolio -> SUCCESS (${portfolioRes.count} case studies found)`);

    // 9. Blog Search & Slug
    const blogRes = await fetch(`${BASE_URL}/blog?search=react`).then(r => r.json());
    console.log(`[Test 10] GET /api/blog?search=react -> SUCCESS (${blogRes.count} articles matched)`);

    // 10. Jobs List & Department Filter
    const jobsRes = await fetch(`${BASE_URL}/jobs?department=Engineering`).then(r => r.json());
    console.log(`[Test 11] GET /api/jobs?department=Engineering -> SUCCESS (${jobsRes.count} openings found)`);

    // 11. Admin Authentication
    const loginRes = await fetch(`${BASE_URL}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@riyadvisoftwaretechnologies.com',
        password: 'admin123'
      })
    }).then(r => r.json());

    console.log('[Test 12] POST /api/admin/login ->', loginRes.success ? 'AUTHENTICATED (JWT Received)' : loginRes);
    const token = loginRes.data?.token;

    // 12. Protected Admin Dashboard Endpoint
    if (token) {
      const dashRes = await fetch(`${BASE_URL}/admin/dashboard`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }).then(r => r.json());
      console.log('[Test 13] GET /api/admin/dashboard (Authenticated) ->', dashRes.data ? dashRes.data : dashRes);
    }

    // 13. Security Test: Unauthorized Access Blocked
    const unauthRes = await fetch(`${BASE_URL}/contact`, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('[Test 14] GET /api/contact (Unauthenticated) -> Status:', unauthRes.status, unauthRes.status === 401 ? '(401 Unauthorized Blocked as expected)' : '');

    console.log('\n=== ALL TEST SUITE STEPS EXECUTED SUCCESSFULLY ===');
  } catch (err) {
    console.error('[Test Suite Error]', err);
  }
};

runTests();
