const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 h-full glassEffect bg-base-200 bg-opacity-50 text-base-content mt-[70px] rounded-tr-lg">
        <li className="">
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
