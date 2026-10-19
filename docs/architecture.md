# CareerPilot – Internship Tracker

## 1. Product Idea
CareerPilot is a web app where students browse internship/job
postings, apply, and track application status. Admins post jobs
and update application status.

## 2. User Roles
- Student: register, browse jobs, apply, track applications
- Admin: create/edit jobs, update application status

## 3. Tech Stack
React (frontend), Node.js + Express (backend), PostgreSQL (database), JWT (auth)

## 4. Data Models
| Model | Fields |
|---|---|
| User | id, name, email, password_hash, role |
| Job | id, title, company, description, deadline, created_by |
| Application | id, job_id, student_id, status, applied_at |
| Notification | id, user_id, message, is_read |

Relations: User 1-N Application, Job 1-N Application, User 1-N Notification

## 5. API Routes
| Method | Route | Purpose |
|---|---|---|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login, get token |
| GET | /api/jobs | List jobs |
| GET | /api/jobs/:id | Job details |
| POST | /api/jobs | Create job (admin) |
| POST | /api/jobs/:id/apply | Apply to job |
| GET | /api/applications/me | My applications |
| PATCH | /api/applications/:id/status | Update status (admin) |

## 6. Frontend Screens
1. Login
2. Register
3. Job List (search + filter)
4. Job Details (Apply button)
5. My Applications (status tracker)

## 7. Folder Structure
- docs/ : architecture document
- backend/ : Express API
- frontend/ : React app

## 8. Future Scope
Resume upload, email notifications, analytics dashboard.
