import { ChangeEventHandler, MouseEventHandler, useState } from "react"
import styles from '../../styles/Demo.module.css'
import { AddressInfo } from "../address"

const getUrl =(address: string) =>`api/check/${address}`

export default function Demo() {
  const [address, setAddress] = useState("")
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAddress(event.currentTarget.value)
    if (event.currentTarget.value.length === 0){
      setResponse({})
    }
  }

  const [response, setResponse] = useState<Partial<AddressInfo>>({})

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault()
    if (address.length === 0) {
      return
    }
    const res = await fetch(getUrl(address))
    const json = await res.json() as AddressInfo
    setResponse(json)
  }

  return <div className={styles.root}>
    <form className={styles.form}>
      <label>Enter an 0x Address</label>
      <div>
      <input className={response.advice && styles[response.advice]} name="address" value={address} onChange={onChange} />
      <button onClick={onSubmit} >✔︎</button>
      </div>
    </form>
    <h5 className={styles.request}>Request</h5>
    <code className={styles.code}>
      GET {getUrl(address)}
    </code>
    <h5>Response</h5>
    <code className={styles.code}>
      {JSON.stringify(response)}
    </code>
  </div>
}