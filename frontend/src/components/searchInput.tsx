import { CiSearch } from "react-icons/ci";
export function SearchInput (){
    return <div>
<label className="input">
<CiSearch size={'20px'}/>
  <input type="text" className=" focus:outline-none " placeholder="Enter Username" />
</label>
    </div>
}