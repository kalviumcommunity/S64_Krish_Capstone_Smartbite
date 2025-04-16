1. Project Title
SmartBite: AI-Powered Personalized Food Delivery Platform

2. Project Overview
SmartBite is a full-stack food delivery platform that allows users to order food from a restaurant via a chatbot interface powered by a large language model (LLM). It offers a smart, conversational experience where users interact with an AI assistant to receive food recommendations based on their preferences. The site also features a secure admin dashboard to manage menu items and customer orders in real-time.

3. Objective
To build a modern, AI-integrated food ordering system using the MERN stack.


To simplify and personalize the food selection process via an LLM chatbot.


To provide restaurant admins with tools to manage orders and menu listings efficiently.



4. Target Audience
Restaurant customers seeking a smart, simplified food ordering experience.


People who prefer chat-based interactions instead of browsing long menus.


Restaurant owners/staff needing an easy-to-use backend to manage orders and listings.



5. Key Features
AI Chatbot Assistant
Chat with users to understand their taste, mood, diet preferences.


Suggest meals based on menu and AI-generated responses.


Use GPT-3.5/4 or Gemini APIs for food-related prompts.


Food Menu System
Browse and filter items (veg/non-veg, spicy/mild, price, etc.).


“Add to Cart” and “Place Order” flow.


Order Management
Track live order status (Pending, Cooking, Delivered).


View order history and details.


 Admin Panel
Secure login with JWT


View/Edit orders


Add/Update/Delete food items


Update order statuses



6. Technology Stack (MERN)
Component
Technology
Database
MongoDB Atlas
Backend
Express.js, Node.js
Frontend
React.js, Tailwind CSS
Chatbot
OpenAI GPT API or Gemini API
Real-time Comm.
Socket.IO (optional)
Authentication
JWT + bcrypt
Hosting
Vercel (frontend), Render/Railway (backend)


7. Project Scope
MVP (Minimum Viable Product):
Menu display and cart system


Chatbot that recommends dishes via LLM


Order placement and admin status updates


Admin dashboard to manage menu and orders


Stretch Goals:
User login/signup for order history


Real-time updates with Socket.IO


Speech-to-text chatbot interaction


Mobile-first responsive UI



8. Accessibility Considerations
Alt text for food images


Proper semantic tags for screen readers


Keyboard navigation for chatbot and order pages


Clear button labels for admin actions



9. Challenges and Solutions
Challenge
Solution
AI suggestions not matching menu
Filter only dishes available in database based on AI suggestions
Secure admin control
Use JWT + hashed passwords + protected routes
LLM costs or rate limits
Add basic rule-based fallback logic for chatbot when API fails
Order status not updating live
Use polling or Socket.IO for real-time status sync (optional)


10. Future Enhancements
Payment gateway integration (Razorpay/Stripe)


Geo-location based delivery tracking


Customer ratings and reviews


Multi-restaurant support



11. Conclusion
SmartBite merges AI intelligence with the simplicity of food delivery to create an engaging, modern restaurant experience. Built using the MERN stack and LLM integration, it highlights both technical skills and user-focused design in building intelligent web applications.

 Capstone Daily Plan (SmartBite – 4 Weeks / 28 Days)


WEEK 1: Planning, Design, Setup
 Focus: Ideation, repo setup, GitHub Projects, low-fid + DB design
Day
Task
Day 1 (Mon)
Brainstorm idea & write project plan (Problem, Features, MVP, Stack) 
Day 2 (Tue)
Draw low-fidelity wireframes (Homepage, Chatbot, Admin Dashboard) 
Day 3 (Wed)
Create GitHub Repo + Add README + License 
Day 4 (Thu)
Setup GitHub Projects board + log 1st task 
Day 5 (Fri)
Design Database schema (FoodItem, User, Order) 
Day 6 (Sat)
Define relationships between entities 
Day 7 (Sun)
Initialize backend (Node + Express), connect MongoDB 


 WEEK 2: Backend + API Integration
Focus: API building (GET/POST/PUT/DELETE), Authentication, DB connections
Day
Task
Day 8 (Mon)
Build GET APIs (get menu, get orders) 
Day 9 (Tue)
Build POST APIs (place order, add food item) 
Day 10 (Wed)
Build PUT API (edit order/food item) + test 
Day 11 (Thu)
Implement DELETE route (admin deletes menu item)
Day 12 (Fri)
Add basic login/signup with JWT  
Day 13 (Sat)
Test DB read/write with POST & GET requests 
Day 14 (Sun)
Deploy backend on Render/Railway + test 


WEEK 3: Frontend UI + Integration
 Focus: Hi-Fid UI, frontend app, components, styling, connection to backend
Day
Task
Day 15 (Mon)
Create Hi-Fid UI designs (Figma) 
Day 16 (Tue)
Initialize frontend (React + Tailwind) 
Day 17 (Wed)
Build Home Page & Navbar components
Day 18 (Thu)
Build Menu display + Cart logic 
Day 19 (Fri)
Build Admin Panel UI (view & update orders)
Day 20 (Sat)
Connect backend APIs with Axios (GET, POST)
Day 21 (Sun)
Match UI with Figma Design 


 WEEK 4: Extras + Final Touches + Submissions
 Focus: Authentication, file upload, testing, Bruno, deployment, proof of concepts
Day
Task
Day 22 (Mon)
Add file upload for food images (Multer/Cloudinary)
Day 23 (Tue)
Add Google login (Firebase OAuth) 
Day 24 (Wed)
Add update/delete functionality in React (for food/orders) 
Day 25 (Thu)
Add Bruno / Postman API collection in repo 
Day 26 (Fri)
Deploy frontend on Vercel 










