import { RoughNotation } from 'react-rough-notation'

export default function Work() {
  return (
    <>
      <div className="py-6">
        <div>
          <h1 className="text-center pb-4">
            <RoughNotation
              animate="true"
              animationDelay="1000"
              animationDuration="4000"
              type="box"
              color="#0ea4e9"
              show={true}
              strokeWidth="3"
            >
              Things I do
            </RoughNotation>
          </h1>
        </div>
        <div className="margin:0 grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-center">
          <div>
            <h2 className="mb-0">Discovery</h2>
            <p>Validation and hypothesis testing via rapid experiments</p>
          </div>
          <div>
            <h2>Product</h2>
            <p>Planning, orchestration and execution of product strategy</p>
          </div>
          <div>
            <h2>Growth</h2>
            <p>Acquisition, activation, retention and LTV boost of customers</p>
          </div>
          <div>
            <h2>Go-to-market</h2>
            <p>Product launch and extension to target customers and geos</p>
          </div>
          <div>
            <h2>Automation</h2>
            <p>Automation of workflows for tedious and repeatable tasks</p>
          </div>
          <div>
            <h2>MVP</h2>
            <p>Scoping, creation and deployment of lean prototypes</p>
          </div>
        </div>
      </div>
    </>
  )
}
