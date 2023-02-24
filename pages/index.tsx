import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { Input } from '@/components/Input'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  const [value, setValue] = useState<string>('hello')
  const [valueTwo, setValueTwo] = useState<string>('goodbye')
  const [loading, setLoading] = useState<boolean>(false)
  console.log(value)

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

  const getData = async (text: string) => {
    setLoading(true)
    await delay(2000)
    console.log('test:', text)
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Input
          value={value}
          setValue={setValue}
          loading={loading}
          getData={getData}
        />
        <Input
          value={valueTwo}
          setValue={setValueTwo}
          loading={loading}
          getData={getData}
        />
      </main>
    </>
  )
}
