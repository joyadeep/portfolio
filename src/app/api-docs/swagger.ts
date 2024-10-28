export const swaggerConfig = {
  openapi: "3.0.0",
  info: {
    title: "Portfolio API Documentation",
    version: "1.0.0",
    description: "Portfolio API Documentation",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Development Server",
    },
  ],
  // paths: {
  //   "/login": {
  //     post: {
  //       summary: "user login",
  //       description: "Authenticate user with email and password",
  //       requestBody: {
  //         required: true,
  //         content: {
  //           "application/json": {
  //             schema: {
  //               type: "object",
  //               properties: {
  //                 email: {
  //                   type: "string",
  //                   format: "email",
  //                   example: "user@example.com",
  //                 },
  //                 password: {
  //                   type: "string",
  //                   format: "password",
  //                   example: "password123",
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //     responses: {
  //       200: {
  //         description: "success",
  //         content: {
  //           "application/json": {
  //             schema: {
  //               type: "object",
  //               properties: {
  //                 message: { type: "string" },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },

  //   "/testimonial": {
  //     get: {
  //       summary: "get all testimonials",
  //       responses: {
  //         200: {
  //           description: "success",
  //           content: {
  //             "application/json": {
  //               schema: {
  //                 type: "array",
  //                 items: {
  //                   type: "object",
  //                   properties: {
  //                     id: { type: "string" },
  //                     name: { type: "string" },
  //                     designation: { type: "string" },
  //                     image: { type: "string", nullable: true },
  //                     message: { type: "string" },
  //                     status: { type: "boolean" },
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
};
