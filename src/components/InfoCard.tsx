import Image from 'next/future/image'
import { FC } from 'react'

import { InfoCardProps } from './InfoCard.types'

import { CardLayout } from '../layouts/CardLayout'

export const InfoCard: FC<InfoCardProps> = ({ img, name, gender, status }) => {
  return (
    <CardLayout>
      <div className="relative  h-64 group">
        <Image
          src={img}
          alt="img"
          fill
          sizes="100%"
          className="absolute group-hover:-translate-y-full duration-300 "
        />

        <div className="flex flex-col justify-evenly h-full">
          <h3 className="font-semibold">Characteristics</h3>
          <p>
            Name:
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-5 px-2.5 py-1 rounded">
              {name}
            </span>
          </p>
          <p>
            Gender:
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 mt-5 px-2.5 py-1 rounded">
              {gender}
            </span>
          </p>
          <p>
            Status:
            <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {status}
            </span>
          </p>
        </div>
      </div>
    </CardLayout>
  )
}
