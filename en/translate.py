import os
import openai

openai.api_key = "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"

input_file_name  = 'input.md'
output_file_name = 'ouput.md'

with open(input_file_name, 'r') as file:
  content = file.read()

# prompt = "Traduza para Inglês norte-americano a seguinte seção de um livro. O documento está formatado em Markdown. E você deve manter essa formatação. \n\n" 
prompt = "Translate to American English the following section of a textbook. The document is in Markdown and therefore you should keep this formatting style.\n\n"
prompt = prompt + content

print("Prompt: " + prompt)
print("Contacting the api...")

completion = openai.ChatCompletion.create(
  model="gpt-4",
  messages=[
#    {"role": "system", "content": "Você é um tradutor de livros acadêmicos escritos em Português para Inglês. Sua especialidade são livros sobre Engenharia de Software voltados para alunos de graduação."},
    {"role": "system", "content": "You are a translator of academic books written in Portuguese to English. Your expertise lies in Software Engineering books aimed at undergraduate students."},
    
    {"role": "user", "content": prompt}
  ]
)

result = completion.choices[0].message.content

print("Tradução\n")
print(result)

with open(output_file_name, 'w') as file:
  file.write(result)