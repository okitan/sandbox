module.exports = async function ({ github, context }) {
  console.log(JSON.stringify(github.event, null, 2));
  console.log(JSON.stringify(context, null, 2));
};
