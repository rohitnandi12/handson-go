FROM golang:1.22.5-alpine3.20

# Create and change to the app directory
WORKDIR /app

# Copy the go.mod and go.sum files first (for caching purposes)
COPY go.mod ./
COPY go.sum ./

# Download dependencies
RUN go mod download

# Copy the source code
COPY . ./

# Build the application (assuming the main package is in the root directory)
RUN go build -o main .

# Run the executable
CMD ["/app/main"]

# Command to build
# backend> docker build -t backend . 

# Commadn to run
# backend> docker run -it -p 8080:8080 backend