const serviceMap = {};

export function getService(serviceName) {
  return serviceMap[serviceName] ?? (serviceMap[serviceName] = resolveService(serviceName));
}

function resolveService(name) {
  const futureInstance = import(name).then(x => new x.default);

  const handler = {
    get: function (target, prop) {
      return function () {
        return target.then(instance => instance[prop].apply(instance, arguments));
      }
    }
  }

  return new Proxy(futureInstance, handler);
}