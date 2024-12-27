const Card = (props: any) => {
  const { children, ...rest } = props;
  return (
    <div
      {...rest}
      className=" rounded-2xl xl:w-[26%] lg:w-[28%] md:w-[40%] 2xl:w-[22%] sm:w-[50%] m-4"
      style={{
        boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.7)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
