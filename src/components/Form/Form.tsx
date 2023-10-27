import { useForm, SubmitHandler } from "react-hook-form"
import st from "./style.module.css";

type Inputs = {
  example: string
}

type Style = {
 bg?: string
 color?: string
}

type Props = {
  formName: string
  style: Style,
}

const defaultProps = {
  bg: 'red',
  color: 'black'
}

export default function Form({ formName, style = defaultProps  }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example"))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div className={st.main}> */}
      <div className={st.main} style={{ backgroundColor: style.bg, color: style.color }}>
        <p>{formName || 'Cadastro de Usuario'}</p>
        <input className={st.input} placeholder="Nome" {...register("example")} />
        {errors.example && <span>This field is required</span>}
        <button className={st.btn} type="submit">Submit</button>
      </div>
    </form>
  )
}