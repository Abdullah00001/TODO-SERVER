const uri = (): string => {
  const ENV = process.env.NODE_ENV;
  const DEV_URI = process.env.DEVELOPMENT_URI;
  const PROD_URI = process.env.PRODUCTION_URI;
  if (ENV === "production") {
    if (PROD_URI) {
      return PROD_URI;
    } else {
      throw new Error("Production Uri Missing");
    }
  } else {
    if (DEV_URI) {
      return DEV_URI;
    } else {
      throw new Error("Development Uri Missing");
    }
  }
};

export { uri };
