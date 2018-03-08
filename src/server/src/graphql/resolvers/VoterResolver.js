export default {
  Query: {
    voters(root, args, ctx) {
      return ctx.models.voters.voterMultiSearch(args, ctx);
    },
    voter(root, args, ctx) {
      return ctx.models.voters.voterSingleSearch(args, ctx);
    },
  },
};