
type HeaderItemProps = {
    name: string,
    updateOrder: (arg: string) => void
};

function HeaderItem(props: HeaderItemProps) {
return (
        <td title={ props.name } >
          <button onClick={() => props.updateOrder( props.name  )}> {props.name } </button>
      
        </td>
    );
};

export default HeaderItem;