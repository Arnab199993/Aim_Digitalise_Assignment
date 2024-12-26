const PrimaryBtn = (props: any) => {
  const { children, ...rest } = props;
  return (
    <div {...rest}>
      <button
        onClick={props.onClick}
        className="bg-[#7cc6e0] p-2 text-white rounded-full w-28 shadow-[4px_4px_8px_0px_rgba(0,0,0,0.7)] text-sm"
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
