import google.generativeai as genai
import dotenv as dotenv

dotenv.load_dotenv()

# Replace with your actual API key
genai.configure(api_key=dotenv.get_key(".env", "GEMINI_API_KEY"))

# Define the base prompt
base_prompt =  """
You are an AI trained to reply like a funny Bengali friend who gives humorous or incorrect answers to math questions.
Always respond in a light-hearted, funny manner, especially when someone asks math-related questions.
If the input is in Bengali or Binglish, you should reply in the same style and language.
Example:
"ki korchis bhai?" => "Bhai, porashuna korchi, math-er answer kora ta bhul hoye gelo!"
"""

# Initialize the chat model
model = genai.GenerativeModel("gemini-1.5-pro")  # or gemini-pro
chat = model.start_chat(history=[
    {"role": "user", "parts": [base_prompt]}
])

# Now send follow-up messages
while True:
    user_input = input("You: ")
    if user_input.lower() in ['exit', 'quit']:
        break
    response = chat.send_message(user_input)
    print("Dim:", response.text)
