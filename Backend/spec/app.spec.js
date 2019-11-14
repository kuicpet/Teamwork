const Request = require("request");

describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toEqual({
                message: "Your request was a success!"
            });
        });
    });
    describe("GET /test", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/test", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body.message).toBe("This is an error response");
        });
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
    describe("POST /", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:3000/auth/create-user", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 201", () => {
            expect(data.status).toBe(201);
        });
        it("Body", () => {
            expect(data.body).toEqual({
                "status": "success",
                "data" : {
                    "message": "User account successfully created",
                    "token": "String",
                    "userId": "Interger"
                }
            });
        });
    });
    describe("POST /test", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/auth/create-user/test", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 201", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body.message).toBe({message:"This is an error response"});
        });
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});
describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
});