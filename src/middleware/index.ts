export function onRequest(context, next) {
    const { url } = context;
    if (url.pathname === '/admin') {
      return new Response(null, {
        status: 301,
        headers: { Location: '/keystatic' },
      });
    }
    return next();
  }