const Card = (props: any) => {
  const { children, ...rest } = props;
  return (
    <div
      {...rest}
      className=" w-[22%] rounded-2xl"
      style={{
        boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.7)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
