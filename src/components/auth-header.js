import { Fragment, useState } from "react";
import { Disclosure, Transition, Dialog } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/LOGO.png";

const AuthHeader = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      name: "Bond Offer",
      href: "/bond",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Notification",
      href: "/notification",
    },
  ];

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Fragment>
      <Disclosure
        as="nav"
        className="backdrop-blur-sm shadow-md sticky w-full z-50 top-0"
      >
        {({ open }) => (
          <>
            <div className="container py-4 relative  ">
              <nav className="flex justify-between items-center ">
                <div className="w-96 h-1/2 flex items-center">
                  <a href="/">
                    <img alt="debt management logo" src={logo} />
                  </a>
                </div>
                <div>
                  <ul className=" hidden lg:flex lg:text-xs xl:text-sm text-gray-400 gap-10 ">
                    {menuItems.map((e, i) => {
                      return (
                        <div key={i}>
                          <NavLink
                            to={e.href}
                            key={i}
                            className={({ isActive }) =>
                              isActive ? "text-black" : ""
                            }
                          >
                            {e.name}
                          </NavLink>
                        </div>
                      );
                    })}
                  </ul>
                </div>
                <div className="hidden lg:flex items-center gap-5">
                  <UserIcon className="h-8" />

                  <ShoppingCartIcon
                    className="h-8"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  />
                </div>

                <Disclosure.Button className="lg:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </nav>
              {open && (
                <Disclosure.Panel className="relative  -mx-4">
                  <div className="flex flex-col mt-5 ">
                    {menuItems.map((item, i) => (
                      <>
                        <div
                          className="flex justify-betweenitems-center flex-row border-b-2 p-4"
                          key={i}
                        >
                          {!item.navLink && (
                            <a
                              className="text-xl"
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              key={i}
                            >
                              {item.name}
                            </a>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </Disclosure.Panel>
              )}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-8 mt-28 text-right">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0  " />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span className="inline-block h-screen " aria-hidden="true">
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-1/5 p-6  overflow-hidden text-left transition-all transform bg-white border-2 border-gray-200 shadow-xl rounded"></div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </>
        )}
      </Disclosure>
      <Outlet />
    </Fragment>
  );
};

export default AuthHeader;
