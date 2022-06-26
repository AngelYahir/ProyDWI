import React from 'react'

export function Navbar() {
  return (
    <>
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered" />
                </div>
                <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div>

            </div>

        </div>
    </>
  )
}
