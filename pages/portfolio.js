import { Fragment, useContext, useState, useEffect } from "react"
import Loadable from "react-loadable"
import Head from "next/head"
import {
  AmountInput,
  Footer,
  Loading,
  Toggle,
} from "../components"

const LoadableComponent = Loadable({
  loader: () => import("../components/charts/allAssetsChart"),
  loading: Loading,
})
const LoadedDonut = Loadable({
  loader: () => import("../components/charts/percentages"),
  loading: Loading,
})

import {
  StoreContext,
  helpers,
  moneyHelpers,
  assetMethods,
  constants,
} from "../utils"
import { useVisibility, useTotalAmounts } from "../utils/hooks"
import { TableManager } from "../components/table"

const { percentage, formattedMoney } = moneyHelpers
const { assetsForCategory, donutStatsMaker } = assetMethods
const { CATEGORIES } = constants

export default function Portfolio() {
  const { totalDisplayed } = useVisibility()
  const { totalForAssets } = useTotalAmounts()
  const {
    state: { currency, categories, assets, institutions },
    dbAction,
  } = useContext(StoreContext)

  const [sortBy, setSortBy] = useState(1)
  const [categoryAttributesLiability, setCategoryAttributesLiability] =
    useState([])
  const [categoryAttributesPositives, setCategoryAttributesPositives] =
    useState([])
  const sortCategory = {
    1: "name",
    2: "split",
    3: "amount",
    4: "return",
    5: "returnP",
  }
  useEffect(() => {
    const theseAssets = assets.filter((a) => !a.item.liability)
    setCategoryAttributesPositives(
      donutStatsMaker(categories, theseAssets, institutions, totalForAssets),
    )
  }, [categories])
  useEffect(() => {
    const theseAssets = assets.filter((a) => a.item.liability)
    setCategoryAttributesLiability(
      donutStatsMaker(categories, theseAssets, institutions, totalForAssets),
    )
  }, [categories])

  const toggleActiveCategory = (name) => {
    let category = categories.find((cat) => cat.item.name === name)
    let newCat = { ...category.item }
    newCat.percentage = !category.item.percentage
    // console.log({ category })
    dbAction("update", "categories", newCat, category.itemId)
  }

  if (!categories) return <Loading />

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="p-0 mb-32 md:mb-8 flex-center flex-col w-full relative">
        <div className="flex flex-col items-center w-full mt-10 mb-20 px-2 md:px-10 lg:px-20">
          <div
            className="w-full mt-10 text-center hidden md:visible"
            style={{ minHeight: "315px" }}
          >
            <h1>Portfolio</h1>
            <LoadableComponent currency={currency} />
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 md:pr-5">
              <h3 className="mt-10 mb-5">Assets</h3>
              <TableManager
                assets={categoryAttributesPositives}
                passedFunction={toggleActiveCategory}
                category="portfolio"
              />

              <div className="w-2/3 mx-auto rounded-xl">
                <LoadedDonut
                  series={categoryAttributesPositives
                    .filter((category) => category?.amount > 0)
                    .map((category) => category?.amount)}
                  labels={categoryAttributesPositives
                    .filter((category) => category?.amount > 0)
                    .map((category) => CATEGORIES[category?.name])}
                  currency={currency}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-5">
              <h3 className="mt-10 mb-5">Liabilities</h3>
              <TableManager
                assets={categoryAttributesLiability}
                passedFunction={toggleActiveCategory}
                type="portfolio"
              />

              <div className="w-2/3 mx-auto rounded-xl">
                <LoadedDonut
                  series={categoryAttributesLiability
                    .filter((category) => category.amount > 0)
                    .map((category) => category.amount)}
                  labels={categoryAttributesLiability
                    .filter((category) => category.amount > 0)
                    .map((category) => CATEGORIES[category.name])}
                  currency={currency}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-20"></div>
      </main>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  )
}
