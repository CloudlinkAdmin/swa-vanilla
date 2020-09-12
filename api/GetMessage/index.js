module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "Hello from the API",
        text2: "Hello back"
      }
    };
  };