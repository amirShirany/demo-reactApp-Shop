/** @format */
import React from 'react';

const MemoComp = (props) => {
	console.log('Memo comp');
	return <div>memo comp - {props.name}</div>;
};

// export default MemoComp;
export default React.memo(MemoComp);

// hoc
// pure || React.memo
// Hook ==> useMemo()
