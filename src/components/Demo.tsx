import { ChangeEventHandler, MouseEventHandler, useState } from "react"
import styles from '../../styles/Demo.module.css'
import { AddressInfo } from "../address"

const getUrl =(address: string) =>`api/check/${address}`

export default function Demo() {
  const [address, setAddress] = useState("")
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAddress(event.currentTarget.value)
  }
  const [isLoading, setLoading] = useState(false)

  const [response, setResponse] = useState<Record<string,Partial<AddressInfo>>>({})

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault()
    if (address.length === 0) {
      return
    }
    setLoading(true)
    const res = await fetch(getUrl(address))
    const json = await res.json() as AddressInfo
    setResponse({...response, [address]: json})
    setLoading(false)
  }

  const responseForAddress = response[address] || {}

  return <div className={styles.root}>
    <form className={styles.form}>
      <label>Enter an 0x Address</label>
      <div>
      <input className={responseForAddress.advice && styles[responseForAddress.advice]} name="address" value={address} onChange={onChange} />
      <button onClick={onSubmit} >✔︎</button>
      </div>
      {responseForAddress.message && <small className={`${styles.message} ${responseForAddress.advice && styles[responseForAddress.advice]}`}>{responseForAddress.message}</small>}
      {isLoading && <small className={styles.message}>...Querying</small>}
    </form>
    <h5 className={styles.request}>Request</h5>
    <code className={styles.code}>
      GET {getUrl(address)}
    </code>
    <h5>Response</h5>
    <code className={styles.code}>
      {JSON.stringify(responseForAddress)}
    </code>
  </div>
}