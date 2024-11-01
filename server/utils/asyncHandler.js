const asyncHandler = (fn) => {
    return async (req, res) => {
      try {
        await fn(req, res);
      } 
      catch (error) {
        console.log(error.message);
        req.status(500).json({error: fn});
      }
    };
  };
  
export default asyncHandler;
  