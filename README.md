Custom AI Chatbot
Welcome to the Custom AI Chatbot project! This chatbot is powered by advanced machine learning techniques and trained on a custom dataset to provide meaningful and context-aware responses. It's designed to interact with users, answer questions, and assist with tasks based on the information it has been trained on.

Features
Custom Responses: The chatbot is trained on a custom dataset, allowing it to provide relevant and personalized responses.
Vector Embedding: The chatbot leverages vector embeddings using Supabase and Pinecone to ensure fast and accurate retrieval of information from the embedded dataset.
Advanced Model: Built on the Llama 70B model, offering state-of-the-art performance for natural language processing tasks.
Real-time Interaction: The chatbot supports dynamic conversation, offering real-time responses to user queries.

Tech Stack

Frontend:
HTML: Structure for the user interface.
CSS: Styling to make the chatbot UI attractive and responsive.
JavaScript: For interaction and handling user input.

Backend:
LangChain.js: Used to manage interactions between the user and the model, processing the input and generating responses.
Supabase: Used for vector embedding storage, enabling efficient and quick retrieval of relevant data.
Pinecone: Used to create embeddings, ensuring high-quality responses based on user queries.

Deployment:
Vercel: Deployed the chatbot on Vercel for seamless and scalable hosting.

How It Works
The user interacts with the chatbot via an input field.
User queries are processed and matched with the most relevant data from the custom dataset using vector embeddings.
The chatbot uses the Llama 70B model to generate and deliver highly accurate and context-aware responses.
The bot returns responses dynamically to the user based on the trained data.

Example Responses

User Query: "What is the function of the chatbot?"
Chatbot Response: "The chatbot is designed to assist with tasks, answer questions, and provide helpful responses based on the data it has been trained on."

User Query: "Tell me more about the tech stack used?"
Chatbot Response: "This chatbot is built using LangChain.js for managing data flow, Supabase and Pinecone for vector embedding, and the Llama 70B model for natural language processing."

Get Started
Visit the deployed version of the chatbot here.
Type a question or command into the input box and interact with the chatbot.
Enjoy a seamless and personalized conversational experience powered by custom data and AI!
