import React from "react";

type RowItemProps = {
    key: string,
    item: string;
};

function RowItem(props: RowItemProps) {
    return (
        <td key={ props.key }>
            { props.item }
        </td>
    );
};

export default RowItem;