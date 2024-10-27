# Dockerfile para o backend
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia o wait-for-it.sh e torna-o executável
COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

# Copia todos os arquivos do backend
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta que o servidor vai rodar
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["./wait-for-it.sh", "db:5432", "--", "node", "server.js"]
