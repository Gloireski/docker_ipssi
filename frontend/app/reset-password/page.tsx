'use client'

import React, { Suspense } from 'react'

const LazyResetPassword = React.lazy(() => import('./ResetPasswordClient'))

export default function Page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <LazyResetPassword />
    </Suspense>
  )
}
