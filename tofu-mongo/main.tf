resource "azurerm_resource_group" "rg" {
  location = var.resource_group_location
  name     = var.resource_group_name
}

resource "azurerm_user_assigned_identity" "identity" {
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  name                = "tofu-mongo-bespinian-labs-identity"
}

resource "azurerm_cosmosdb_account" "cosdb" {
  name                  = "bespinian-resource"
  location              = azurerm_resource_group.rg.location
  resource_group_name   = azurerm_resource_group.rg.name
  offer_type            = "Standard"
  kind                  = "MongoDB"

  geo_location {
    location          = azurerm_resource_group.rg.location
    failover_priority = 0
  }

  consistency_policy {
    consistency_level       = "Eventual"
  }
}
