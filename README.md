HNG-12---Basic-Info
-----

## Introduction

This project documents a public API that retrieves basic information.
The live link for the project can be found [here](https://hng-12-basic-info.vercel.app/)

## Tech Stack (Dependencies)

### 1. Dependencies
The tech stack used includes the following:
 * **Node** **v22.13.1** and **Express** **v4.21.2** as our server language and server framework
You can download and install the dependencies mentioned above using `npm` as:
The node installer can be downloaded from the [official website](https://nodejs.org/en/download/current)
```
npm install express
```

## Development Setup
1. **Download the project and run the code locally**
```
git clone https://github.com/Timmy-id/HNG-12---Basic-Info.git
cd 'HNG12-Basic Info'/
```

2. **Install the dependencies:**
```
npm install
```

3. **Run the server**
```
npm start
```

## Resource Endpoint
### Success
```
GET http://localhost:3000/
```
#### Sample Response
```
200
```

```
{
  email: "oluwatimilehin.id@gmail.com",
  current_datetime: "2025-01-28T23:15:34.200Z",
  github_url: "https://github.com/Timmy-id/HNG-12---Basic-Info"
}
```

### Not Found
```
GET http://localhost:3000/new
```
#### Sample Response
```
400
```

```
{
  error: "Route not found"
}
```

## If you need developers for your projects, you can visit:
[Python Developers](https://hng.tech/hire/python-developers) <br>
[CSharp Developers](https://hng.tech/hire/csharp-developers) <br>
[Golang Developers](https://hng.tech/hire/golang-developers) <br>
[PHP Developers](https://hng.tech/hire/php-developers) <br>
[Java Developers](https://hng.tech/hire/java-developers) <br>
[Node js Developers](https://hng.tech/hire/nodejs-developers)
