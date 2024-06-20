import ImageSlider from "./ImageSlider"
import ItemStats from "./ItemStats"
import { Table } from "./Table"
import Avatar from "../User/Avatar"
const ItemPage = () => {
  return (
    <div className="grid grid-cols-3 p-6">
       <div className="col-span-2">
       <ImageSlider/>
       <div className="flex flex-row justify-between">
       <h1 className="text-xl p-5">Product Name</h1>
       <div class="stat-value">$89,400</div>
       </div>
       <div class="collapse collapse-arrow bg-base-200  p-5">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Description
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
  <Table/>
</div>
       </div>
       <div>
       <ItemStats/>
       <div className="justify-center p-3">
       
        <Avatar/>
       </div>
       </div>
    </div>
  )
}

export default ItemPage