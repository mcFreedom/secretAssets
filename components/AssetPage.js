import { useState, useEffect, Fragment, useContext } from "react"
import { AssetCategory } from "./"
import {
  useVisibility,
  StoreContext,
  assetMethods,
  moneyHelpers,
  constants,
  useTotalAmounts,
} from "../utils"
const { donutStatsMaker } = assetMethods
const { formattedMoney } = moneyHelpers
const { CATEGORIES } = constants
import Link from "next/link"
import { FaPlus } from "react-icons/fa"
import { useRouter } from "next/router"

export const AssetPage = ({ categoryProp, liabilities = false }) => {
  const [category, setCategory] = useState(categoryProp)
  const [theseAssets, setTheseAssets] = useState([])
  const [assetsFormatted, setAssetsFormatted] = useState([])

  const { totalDisplayed } = useVisibility()
  const { totalForAssets } = useTotalAmounts()

  const router = useRouter()

  const {
    state: { assets, institutions, currency, categories },
  } = useContext(StoreContext)

  useEffect(() => {
    if (assets.length == 0) router.push("/new-asset")
    const a = liabilities ? assets.filter((a) => a.item.liability) : assets
    setTheseAssets(a)
  }, [assets])

  useEffect(() => {
    if (!theseAssets) return
    const a = donutStatsMaker(
      categories,
      theseAssets,
      institutions,
      totalForAssets,
    )
    setAssetsFormatted(a)
  }, [theseAssets])

  return (
    <>
      <div className="flex snap-x mt-8 md:mt-12 bg-gray-400 text-white justify-center">
        {assetsFormatted.map((item, i) => {
          if (item.hidden) return <Fragment key={i}></Fragment>
          return (
            <div
              key={i}
              onClick={() => setCategory(item.name)}
              className={`${
                category === item.name ? "bg-gray-600" : ""
              } flex flex-col snap-center p-4 items-end cursor-pointer`}
            >
              <div className={`${category === item.name ? "font-bold" : ""}`}>
                {CATEGORIES[item.name]}
              </div>
              <div className="text-sm">
                {!totalDisplayed
                  ? `****${currency}`
                  : formattedMoney(item.amount, currency)}
              </div>
            </div>
          )
        })}
      </div>
      {assetsFormatted?.length < 1 ? (
        <div className="flex-center flex-col h-full">
          {`No ${liabilities ? "Liabilities" : "Assets"}`}

          <Link href="/new-asset">
            <button className="btn small nav-bar my-2 md:my-1 h-10 md:h-initial flex-center">
              <FaPlus className="pr-1" />
              Add
            </button>
          </Link>
        </div>
      ) : (
        <AssetCategory
          category={category || categories[0]?.name}
          assets={theseAssets}
        />
      )}
    </>
  )
}
