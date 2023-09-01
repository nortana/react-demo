interface MyButtonProps {
    /**按钮文字 */
    title:string;
    /**按钮是否禁用 */
    disabled: boolean;
}

function MyButton({title,disabled}:MyButtonProps){
return (
    <button disabled={disabled}>{title}</button>
);
}

export default function MyApp(){
    return (
        <div>
            <h1>Welcome to my button demo</h1>
            <MyButton title="我是一个禁用的按钮" disabled={true}></MyButton>
        </div>

    );
}