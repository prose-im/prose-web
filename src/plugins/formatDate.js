/*
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 */

/**************************************************************************
 * EXPORTS
 * ************************************************************************* */

export default ({ app }, inject) => {

    // Inject formatDate to context
    inject('formatDate', (string) => new Date(string).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))
}